import React, { useEffect, useRef, useState } from 'react';

import { convertCurrentTime } from 'utils/helpers';

import play from 'assets/img/play.svg';
import pause from 'assets/img/pause.svg';
import waves from 'assets/img/waves.svg';

import './MessageAudio.scss';

interface MessagAudioProps {
    audioSrc: string;
}

const MessageAudio: React.FC<MessagAudioProps> = ({ audioSrc }: MessagAudioProps) => {
    const audioElem = useRef<any>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const togglePlay = () => {
        if (!isPlaying) {
            audioElem.current.play();
        } else {
            audioElem.current.pause();
        }
    };

    useEffect(() => {
        audioElem.current.volume = '0.1';
        audioElem.current.addEventListener('playing', () => {
            setIsPlaying(true);
        }, false);
        audioElem.current.addEventListener('ended', () => {
            setIsPlaying(false);
            setProgress(0);
        }, false);
        audioElem.current.addEventListener('pause', () => {
            setIsPlaying(false);
        }, false);
        audioElem.current.addEventListener('timeupdate', () => {
            const duration = (audioElem.current && audioElem.current.duration) || 0;
            setCurrentTime(audioElem.current.currentTime);
            setProgress((audioElem.current.currentTime / duration) * 100);
        });
    }, []);

    return (
        <div className="message__audio">
            <audio ref={audioElem} src={audioSrc} preload="auto" />
            <div
                className="message__audio-progress"
                style={{ width: progress + '%' }}
            ></div>
            <div className="message__audio-info">
                <div className="message__audio-btn">
                    <button onClick={togglePlay}>
                        {isPlaying ? <img src={pause} alt="Pause svg" /> : <img src={play} alt="Play svg" />}
                    </button>
                </div>
                <div className="message__audio-wave">
                    <img src={waves} alt="Wave svg" />
                </div>
                <div className="message__audio-duration">{convertCurrentTime(currentTime)}</div>
            </div>
        </div>
    );
};

export default MessageAudio;
