/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import authStore from '../../services/authStore';

function PreguntaVideo({ enunciado }) {
  const videoRef = useRef(null);
  const setVideoURL = authStore(state => state.setVideoURL);
  const {
    status,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    mediaBlobUrl,
    previewStream,
  } = useReactMediaRecorder({ video: true, audio: true });
  const debeDetener = status === 'recording' || status === 'paused';
  const debePausar = status === 'recording';
  const debeIniciar = status === 'idle' || status === 'stopped';
  const debeReaundar = status === 'paused';

  useEffect(() => {
    if (videoRef.current && previewStream) {
      videoRef.current.srcObject = previewStream;
    }
  }, [previewStream]);

  useEffect(() => {
    if (mediaBlobUrl) {
      setVideoURL(mediaBlobUrl);
    }
  }, [mediaBlobUrl, setVideoURL]);

  return (
    <div>
      <p className='font-bold mb-3'>{enunciado}</p>
      <div className='flex gap-4 justify-center mb-3'>
        {debeIniciar && (
          <button
            onClick={startRecording}
            type='button'
            className='bg-green-400 px-3 py-2 rounded-md text-white'
          >
            {status === 'idle' ? 'Iniciar grabación' : 'Grabar otra vez'}
          </button>
        )}
        {debeDetener && (
          <button
            onClick={stopRecording}
            type='button'
            className='px-3 py-2 bg-red-400 rounded-md text-white'
          >
            Detener
          </button>
        )}
        {debeReaundar && (
          <button
            onClick={resumeRecording}
            type='button'
            className='px-3 py-2 bg-yellow-400 rounded-md text-white'
          >
            Reaundar
          </button>
        )}
        {debePausar && (
          <button
            onClick={pauseRecording}
            type='button'
            className='px-3 py-2 bg-orange-400 rounded-md text-white'
          >
            Pausar
          </button>
        )}
      </div>

      {(status === 'recording' || status === 'paused') && (
        <video
          ref={videoRef}
          controls
          autoPlay
          className='m-auto object-contain rounded-lg w-auto max-h-[400px]'
        />
      )}
      {mediaBlobUrl && (
        <video
          src={mediaBlobUrl}
          controls
          autoPlay
          className='m-auto object-contain rounded-lg w-auto max-h-[400px]'
        />
      )}
    </div>
  );
}

export default PreguntaVideo;
