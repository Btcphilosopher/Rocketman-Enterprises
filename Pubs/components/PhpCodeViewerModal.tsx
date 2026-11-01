'use client';

import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode, Terminal, ExternalLink, ShieldCheck } from 'lucide-react';
import { PHP_FILES, PhpFileEntry } from '@/lib/phpFilesData';
import JSZip from 'jszip';

interface PhpCodeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PhpCodeViewerModal({ isOpen, onClose }: PhpCodeViewerModalProps) {
  const [activeFileName, setActiveFileName] = useState<string>('index.php');
  const [copied, setCopied] = useState<boolean>(false);
  const [downloadingZip, setDownloadingZip] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentFile: PhpFileEntry =
    PHP_FILES.find((f) => f.filename === activeFileName) || PHP_FILES[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadZip = async () => {
    try {
      setDownloadingZip(true);
      const zip = new JSZip();
      const folder = zip.folder('micropub-collective-php');

      // Add all PHP, CSS, and Readme files
      PHP_FILES.forEach((file) => {
        folder?.file(file.filename, file.code);
      });

      // Generate the zip blob
      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'micropub-collective-php.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error generating zip:', err);
    } finally {
      setDownloadingZip(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl bg-[#09130e] border border-[#d4af37]/60 rounded shadow-2xl flex flex-col h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1f3729] bg-[#0c1812]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#d4af37]/10 border border-[#d4af37]/40 rounded text-[#d4af37]">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-lg sm:text-xl font-bold text-white">
                  The MicroPub Collective — PHP Source Suite
                </h2>
                <span className="bg-[#173022] text-[#d4af37] border border-[#d4af37]/30 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  PHP 7.4 / 8.x
                </span>
              </div>
              <p className="text-xs text-[#a69f8e] mt-0.5">
                Modular PHP architecture matching the website layout, ready for Apache, Nginx, or local development.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadZip}
              disabled={downloadingZip}
              className="flex items-center gap-1.5 bg-[#d4af37] hover:bg-[#faeed1] text-[#09130e] px-3.5 py-1.5 rounded text-xs font-bold tracking-wider transition-colors cursor-pointer disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloadingZip ? 'BUNDLING...' : 'DOWNLOAD .ZIP'}</span>
            </button>
            <button
              onClick={onClose}
              className="text-[#a69f8e] hover:text-white p-1.5 rounded transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Instructions Strip */}
        <div className="bg-[#0f2118] px-6 py-2.5 border-b border-[#1b3325] flex flex-wrap items-center justify-between text-xs text-[#ded8cb] gap-3">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#d4af37]" />
            <span>To run locally: <code className="bg-[#08120e] text-[#d4af37] px-2 py-0.5 rounded font-mono">php -S localhost:8000</code></span>
          </div>
          <div className="flex items-center gap-2 text-[#a49e8f]">
            <span>Files also generated directly in project folder: <code className="text-white font-mono">/php-project/</code></span>
          </div>
        </div>

        {/* Center: File Browser Sidebar + Code Content */}
        <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
          
          {/* File Tabs Sidebar */}
          <div className="w-full md:w-60 bg-[#070e0a] border-r border-[#1a3324] overflow-y-auto p-3 flex md:flex-col gap-1.5 shrink-0">
            <div className="hidden md:block px-3 py-1.5 text-[10px] font-bold text-[#8a8374] uppercase tracking-wider">
              Project Files ({PHP_FILES.length})
            </div>
            {PHP_FILES.map((file) => (
              <button
                key={file.filename}
                onClick={() => setActiveFileName(file.filename)}
                className={`text-left px-3 py-2 rounded text-xs font-mono flex items-center justify-between transition-colors cursor-pointer w-full whitespace-nowrap ${
                  activeFileName === file.filename
                    ? 'bg-[#14281e] text-[#d4af37] font-bold border-l-2 border-[#d4af37]'
                    : 'text-[#bbb4a4] hover:bg-[#0e1c15] hover:text-white'
                }`}
              >
                <span>{file.filename}</span>
                <span className="text-[10px] text-[#6d756e] font-sans ml-2">
                  {file.category}
                </span>
              </button>
            ))}
          </div>

          {/* Main Code View Pane */}
          <div className="flex-grow flex flex-col bg-[#060b08] overflow-hidden">
            {/* Active File Bar */}
            <div className="px-6 py-2.5 bg-[#09130e] border-b border-[#1a3324] flex items-center justify-between text-xs">
              <div>
                <span className="font-mono text-[#d4af37] font-semibold">{currentFile.filename}</span>
                <span className="text-[#8c8574] ml-3 text-[11px] hidden sm:inline">{currentFile.description}</span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 bg-[#12231a] hover:bg-[#1a3527] text-[#e3ded3] px-3 py-1 rounded border border-[#233f2e] text-xs transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400 font-bold">COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Body with line numbers */}
            <div className="flex-grow overflow-auto p-4 sm:p-6 font-mono text-xs sm:text-sm text-[#e6e2d8] leading-relaxed select-text bg-[#070d09]">
              <pre className="whitespace-pre overflow-x-auto">
                {currentFile.code}
              </pre>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#0c1812] border-t border-[#1f3729] flex flex-wrap items-center justify-between text-xs text-[#8c8574]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            <span>Pure native PHP code with zero framework lock-in. Works with vanilla PHP 7.4, 8.0, 8.1, 8.2, 8.3+.</span>
          </div>
          <div>
            <span className="text-[#d4af37]">The MicroPub Collective</span>
          </div>
        </div>

      </div>
    </div>
  );
}
