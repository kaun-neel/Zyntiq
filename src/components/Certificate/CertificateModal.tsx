import React, { useRef, useState, useEffect } from 'react';
import { X, Download, Share2, Award } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setImageLoaded(false);
      setImageError(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const downloadCertificate = async () => {
    if (!certificateRef.current) return;

    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: '#ffffff',
        useCORS: true,
        allowTaint: true,
        logging: false,
        width: 1200,
        height: 800
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${courseName}-Certificate-${studentName}.pdf`);
    } catch (error) {
      console.error('Error generating certificate:', error);
      // Fallback: try direct image download
      try {
        const link = document.createElement('a');
        link.href = '/image.png'; // Use the uploaded image
        link.download = `${courseName}-Certificate-${studentName}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (fallbackError) {
        console.error('Fallback download failed:', fallbackError);
        alert('Download failed. Please try again or contact support.');
      }
    }
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
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Course Certificate</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Certificate */}
        <div className="p-6">
          <div
            ref={certificateRef}
            className="certificate-container bg-gradient-to-br from-purple-50 to-indigo-50 border-8 border-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-12 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
              border: '8px solid',
              borderImage: 'linear-gradient(45deg, #8b5cf6, #6366f1) 1',
              minHeight: '600px'
            }}
          >
            {/* Background Certificate Image */}
            {!imageError && (
              <div className="absolute inset-0 opacity-10">
                <img 
                  src="/image.png"
                  alt="Certificate Background"
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageError(true);
                    console.log('Certificate background image failed to load');
                  }}
                />
              </div>
            )}

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-20"></div>

            {/* Logo */}
            <div className="mb-8 relative z-10">
              <img 
                src="/Frame 3.png" 
                alt="Zyntiq Logo" 
                className="h-16 mx-auto object-contain"
              />
            </div>

            {/* Certificate Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text relative z-10">
              Certificate of Completion
            </h1>

            {/* Award Icon */}
            <div className="flex justify-center mb-6 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Certificate Text */}
            <div className="space-y-6 mb-8 relative z-10">
              <p className="text-lg text-gray-700">This is to certify that</p>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 break-words">
                {studentName}
              </h2>
              
              <p className="text-lg text-gray-700">has successfully completed the</p>
              
              <h3 className="text-2xl md:text-3xl font-bold gradient-text break-words">
                {courseName}
              </h3>
              
              <p className="text-lg text-gray-700">
                on {formatDate(completionDate)}
              </p>
            </div>

            {/* Signature Section */}
            <div className="flex justify-between items-end mt-12 pt-8 border-t border-gray-300 relative z-10">
              <div className="text-left">
                <div className="w-32 h-0.5 bg-gray-400 mb-2"></div>
                <p className="text-sm text-gray-600">Authorized Signature</p>
              </div>
              
              <div className="text-center">
                <p className="text-xs text-gray-500 mb-1">Certificate ID</p>
                <p className="text-sm font-mono text-gray-700">{certificateId}</p>
              </div>
              
              <div className="text-right">
                <div className="w-32 h-0.5 bg-gray-400 mb-2"></div>
                <p className="text-sm text-gray-600">Date Issued</p>
              </div>
            </div>

            {/* Verification Note */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200 relative z-10">
              <p className="text-xs text-blue-800">
                This certificate can be verified at zyntiq.in with Certificate ID: {certificateId}
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 p-6 border-t border-gray-200">
          <button
            onClick={downloadCertificate}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
          >
            <Download size={20} />
            Download PDF
          </button>
          <button
            onClick={shareCertificate}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-purple-300 text-purple-600 rounded-xl font-medium hover:bg-purple-50 transition-colors"
          >
            <Share2 size={20} />
            Share Certificate
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;