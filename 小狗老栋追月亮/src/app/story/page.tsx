'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './story.module.css';
import { storyData } from './storyData';

export default function StoryPage() {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const currentPage = storyData[currentPageIndex];
    const isFirstPage = currentPageIndex === 0;
    const isLastPage = currentPageIndex === storyData.length - 1;

    const handleNext = () => {
        if (!isLastPage) {
            setCurrentPageIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (!isFirstPage) {
            setCurrentPageIndex(prev => prev - 1);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.bookPage}>
                <div className={styles.imageContainer}>
                    <Image
                        src={currentPage.image}
                        alt={`Illustration for page ${currentPage.id}`}
                        width={800}
                        height={500}
                        className={styles.storyImage}
                        priority
                    />
                </div>

                <div className={styles.textContent}>
                    <div className={styles.pinyin}>{currentPage.pinyin}</div>
                    <div className={styles.chineseText}>{currentPage.text}</div>

                    {currentPage.newChars.length > 0 && (
                        <div className={styles.newChars}>
                            <span className={styles.newCharsTitle}>新字 (New Characters):</span>
                            {currentPage.newChars.join('、')}
                        </div>
                    )}
                </div>

                <div className={styles.controls}>
                    <button
                        className={styles.button}
                        onClick={handlePrev}
                        disabled={isFirstPage}
                    >
                        上一页 (Previous)
                    </button>
                    <button
                        className={styles.button}
                        onClick={handleNext}
                        disabled={isLastPage}
                    >
                        下一页 (Next)
                    </button>
                </div>

                <div className={styles.pageNumber}>
                    第 {currentPage.id} 页 / 共 {storyData.length} 页
                </div>
            </div>
        </div>
    );
}
