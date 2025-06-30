import React, { useRef } from 'react';
import { X, Download, Share2, Award } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  courseName: string;
  completionDate: string;
  certificateId: string;
}

const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  studentName,
  courseName,
  completionDate,
  certificateId
}) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const downloadCertificate = async () => {
    try {
      // Create a canvas to draw the certificate image with user details
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        console.error('Could not get canvas context');
        return;
      }

      // Load the certificate template image
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = () => {
        // Set canvas size to match image
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Draw the certificate template
        ctx.drawImage(img, 0, 0);
        
        // Add custom text overlay for student details
        ctx.fillStyle = '#2d3748'; // Dark gray color
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Student name - positioned above the line (around 48% from top)
        ctx.font = 'bold 60px Arial, sans-serif';
        ctx.fillText(studentName, canvas.width / 2, canvas.height * 0.48);
        
        // Course name - positioned below the line (around 58% from top)
        ctx.font = 'bold 36px Arial, sans-serif';
        ctx.fillText(courseName, canvas.width / 2, canvas.height * 0.58);
        
        // Date - positioned in the lower section
        ctx.font = '28px Arial, sans-serif';
        ctx.fillText(formatDate(completionDate), canvas.width / 2, canvas.height * 0.72);
        
        // Certificate ID - positioned at the bottom
        ctx.font = '20px Arial, sans-serif';
        ctx.fillText(`Certificate ID: ${certificateId}`, canvas.width / 2, canvas.height * 0.90);
        
        // Convert canvas to blob and download
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${courseName}-Certificate-${studentName}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          }
        }, 'image/png');
      };
      
      img.onerror = () => {
        console.error('Failed to load certificate image');
        // Fallback: direct download of the template
        downloadImageDirectly();
      };
      
      // Load the certificate template
      img.src = '/image copy copy copy copy.png';
      
    } catch (error) {
      console.error('Error generating certificate:', error);
      // Fallback: direct download of the template
      downloadImageDirectly();
    }
  };

  const downloadImageDirectly = () => {
    // Fallback method: direct download of the certificate template
    const link = document.createElement('a');
    link.href = '/image copy copy copy copy.png';
    link.download = `${courseName}-Certificate-${studentName}.png`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareCertificate = async () => {
    const shareText = `🎓 I've successfully completed the ${courseName} course and earned my certificate from Zyntiq!

📅 Completed: ${formatDate(completionDate)}
🆔 Certificate ID: ${certificateId}
🏫 Issued by: Zyntiq

#Zyntiq #OnlineLearning #Certificate #${courseName.replace(/\s+/g, '')}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${courseName} Certificate`,
          text: shareText,
          url: window.location.href
        });
      } catch (error) {
        console.error('Error sharing certificate:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareText);
      alert('Certificate details copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Course Certificate</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Certificate Display */}
        <div className="p-4 sm:p-6">
          <div
            ref={certificateRef}
            className="relative w-full max-w-4xl mx-auto"
          >
            {/* Certificate Image */}
            <div className="relative w-full">
              <img 
                src="/image copy copy copy copy.png" 
                alt="Certificate of Completion" 
                className="w-full h-auto rounded-xl shadow-lg"
                style={{ maxHeight: '70vh', objectFit: 'contain' }}
              />
              
              {/* Overlay with student details - positioned to match certificate layout exactly */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                {/* Student Name - positioned ABOVE the line (around 48% from top) */}
                <div 
                  className="absolute text-gray-800 font-bold break-words max-w-[70%]"
                  style={{ 
                    top: '48%', 
                    left: '50%', 
                    transform: 'translateX(-50%)',
                    fontSize: 'clamp(1.5rem, 4.5vw, 3.5rem)',
                    lineHeight: '1.1',
                    letterSpacing: '0.02em',
                    fontFamily: 'serif'
                  }}
                >
                  {studentName}
                </div>
                
                {/* Course Name - positioned BELOW the line (around 58% from top) */}
                <div 
                  className="absolute text-gray-700 font-semibold break-words max-w-[80%]"
                  style={{ 
                    top: '58%', 
                    left: '50%', 
                    transform: 'translateX(-50%)',
                    fontSize: 'clamp(1rem, 3.2vw, 2.2rem)',
                    lineHeight: '1.2',
                    letterSpacing: '0.01em',
                    fontFamily: 'serif'
                  }}
                >
                  {courseName}
                </div>
                
                {/* Date - positioned in the lower section */}
                <div 
                  className="absolute text-gray-600 break-words"
                  style={{ 
                    top: '72%', 
                    left: '50%', 
                    transform: 'translateX(-50%)',
                    fontSize: 'clamp(0.8rem, 2.5vw, 1.6rem)',
                    lineHeight: '1.2',
                    fontFamily: 'serif'
                  }}
                >
                  {formatDate(completionDate)}
                </div>
                
                {/* Certificate ID - positioned at the bottom */}
                <div 
                  className="absolute text-gray-500 font-mono break-words"
                  style={{ 
                    top: '90%', 
                    left: '50%', 
                    transform: 'translateX(-50%)',
                    fontSize: 'clamp(0.6rem, 1.8vw, 1.2rem)',
                    lineHeight: '1.2'
                  }}
                >
                  Certificate ID: {certificateId}
                </div>
              </div>
            </div>
          </div>

          {/* Certificate Info */}
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Certificate Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-blue-800">Student:</span>
                  <span className="ml-2 text-blue-700">{studentName}</span>
                </div>
                <div>
                  <span className="font-medium text-blue-800">Course:</span>
                  <span className="ml-2 text-blue-700">{courseName}</span>
                </div>
                <div>
                  <span className="font-medium text-blue-800">Completed:</span>
                  <span className="ml-2 text-blue-700">{formatDate(completionDate)}</span>
                </div>
                <div>
                  <span className="font-medium text-blue-800">Certificate ID:</span>
                  <span className="ml-2 text-blue-700 font-mono">{certificateId}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-4 sm:p-6 border-t border-gray-200">
          <button
            onClick={downloadCertificate}
            className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 min-h-[48px]"
          >
            <Download size={20} />
            <span className="text-sm sm:text-base">Download Certificate</span>
          </button>
          <button
            onClick={shareCertificate}
            className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 border-2 border-purple-300 text-purple-600 rounded-xl font-medium hover:bg-purple-50 transition-colors min-h-[48px]"
          >
            <Share2 size={20} />
            <span className="text-sm sm:text-base">Share Certificate</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;