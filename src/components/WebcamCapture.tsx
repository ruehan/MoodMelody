'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { CameraIcon } from '@heroicons/react/24/solid';

interface WebcamCaptureProps {
  onCapture: (imageBlob: Blob) => void;
  isAnalyzing: boolean;
}

export default function WebcamCapture({
  onCapture,
  isAnalyzing,
}: WebcamCaptureProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing webcam:', err);
      }
    };

    startWebcam();

    return () => {
      const stream = videoRef.current?.srcObject as MediaStream | null;
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d')?.drawImage(video, 0, 0);
      canvas.toBlob((blob) => {
        if (blob) onCapture(blob);
      }, 'image/jpeg');
    }
  };

  if (!isClient) {
    return null; // 또는 로딩 상태를 표시
  }

  return (
    <div className="relative">
      <video ref={videoRef} autoPlay muted className="w-full h-auto" />
      <canvas ref={canvasRef} className="hidden" />
      <button
        onClick={captureImage}
        disabled={isAnalyzing}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center w-full"
      >
        {isAnalyzing ? (
          'Analyzing...'
        ) : (
          <>
            <CameraIcon className="w-5 h-5 mr-2" />
            Analyze Emotion
          </>
        )}
      </button>
    </div>
  );
}
