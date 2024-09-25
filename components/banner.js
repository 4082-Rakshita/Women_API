import React, { useEffect, useRef, useState } from 'react';
import { View, Image, FlatList, Dimensions } from 'react-native';
import styles from './styles';

const screenWidth = Dimensions.get("window").width;

const Banner = ({ items }) => {
    const flatListRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % items.length;
            flatListRef.current.scrollToIndex({
                index: nextIndex,
                animated: true,
            });
            setActiveIndex(nextIndex);
        }, 2000);
        
        return () => clearInterval(interval);
    }, [activeIndex, items.length]);

    const renderBannerItem = ({ item }) => {
        return (
            <View style={styles.bannerItem}>
                <Image
                    source={{ uri: item.url }}
                    style={styles.bannerImage}
                />
            </View>
        );
    };

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.floor(contentOffsetX / screenWidth);
        if (index !== activeIndex) {
            setActiveIndex(index);
        }
    };

    return (
        <FlatList
            data={items}
            ref={flatListRef}
            renderItem={renderBannerItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            pagingEnabled
        />
    );
};

export default Banner;

