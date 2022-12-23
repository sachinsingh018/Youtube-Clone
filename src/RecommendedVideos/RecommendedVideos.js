import React from 'react';
import VideoCard from './VideoCard';
import './RecommendedVideos.css';

function RecommendedVideos() {
    return (        
           <div className="recommendedVideos">
              <h2>Recommended</h2>
              <div className="recommendedVideos__videos">
                  <VideoCard 
                    title="Weird Genius - Sweet Scar (ft. Prince Husein)"
                    views="5M Views"
                    timestamp="3 years ago"
                    channelImage="https://yt3.ggpht.com/QZ8KKMvZln_-YajnMKKMdtMyz8VvGzl5sB1j7BSap_FdQcsbgCvBq-LeKZ9LQbaVqYL5qO2r=s176-c-k-c0x00ffffff-no-rj-mo"
                    channel="Weebs Tv"
                    image="https://i.ytimg.com/vi/Gxjh2NFmPfA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYDIJ0w6cjD3ld1-VFuGZyrZH_zw"
                  />
                  <VideoCard 
                    title="Symphony of Destruction"
                    views="70M Views"
                    timestamp="9 years ago"
                    channelImage="https://yt3.ggpht.com/ivGOVVq3Q4yn1XGM8AL7YrfuOqXR_VMI8nqnugCZz0DdYCK2uxYKLRGVL5fX6nveMdTmTeFV=s88-c-k-c0x00ffffff-no-rj"
                    channel="Megadeth"
                    image="https://i.ytimg.com/vi/WdoXZf-FZyA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATFb1q7Sayo5f7xhDJ82Wj0_uqZQ"
                  />
                  <VideoCard 
                    title="Metallica- The day that never comes"
                    views="103M Views"
                    timestamp="10 years ago"
                    channelImage="https://yt3.googleusercontent.com/AfuhAJ4wRjxjfIRqpov3oav0N3OYwmXTX38eNOO0M_ronTWWOQPm-MKITrumXXcWgHxlr7fOfYE=s176-c-k-c0x00ffffff-no-rj"
                    channel="Metallica"
                    image="https://i.ytimg.com/vi/dkNfNR1WYMY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC93k0ELdM87MvJvMvIQYqAqMrsNA"
                  />
                  <VideoCard 
                    title="Enter Sandman"
                    views="9.3M Views"
                    timestamp="10 years ago"
                    channelImage="https://yt3.ggpht.com/AfuhAJ4wRjxjfIRqpov3oav0N3OYwmXTX38eNOO0M_ronTWWOQPm-MKITrumXXcWgHxlr7fOfYE=s88-c-k-c0x00ffffff-no-rj"
                    channel="Metallica"
                    image="https://i.ytimg.com/vi/CD-E-LDc384/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDH9k96IrdfgU4kxr9MgCSLpLh74Q"
                  />
                  <VideoCard 
                    title="Danza Kaduro"
                    views="83M Views"
                    timestamp="4 years ago"
                    channelImage="https://yt3.ggpht.com/bwYXCP0SyRBxXI2sAzzDR9FQW_QNTCOltmKHep3f7bO5BEtVlM_MCN_x-ml179G1Wg30FpDLKA=s88-c-k-c0x00ffffff-no-rj"
                    channel="Don Omar"
                    image="https://i.ytimg.com/vi/7zp1TbLFPp8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCqPOZ3cBp76n280c4-xmaw2AYuaQ"
                  />
                  <VideoCard 
                    title="Post Malone, Swae Lee - Sunflower (Spider-Man: Into the Spider-Verse)"
                    views="1.9B Views"
                    timestamp="4 years ago"
                    channelImage="https://yt3.ggpht.com/HFw3b_OeBeQO-4nd8BTzpxgdX4IbuymfGeh1f4_5R3MtC0nECHimxEerVRZBs8Zhltdkjhepjw=s88-c-k-c0x00ffffff-no-rj"
                    channel="Post Malone"
                    image="https://i.ytimg.com/vi/ApXoWvfEYVU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDW0W6feL7D578Dl9oGNgjIwKSN6A"
                  />
                  <VideoCard 
                    title="Bassi in UK and Europe"
                    views="410K Views"
                    timestamp="5 months ago"
                    channelImage="https://i.ytimg.com/vi/R5MGusrjK1Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8i6jLFm83CuE4A3RL-Jdh-AScGw"
                    channel="Anubhav Singh Bassi"
                    image="https://i.ytimg.com/vi/R5MGusrjK1Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8i6jLFm83CuE4A3RL-Jdh-AScGw"
                  />
                  <VideoCard 
                    title="Top Funniest Scenes from the movie Dictator"
                    views="23K Views"
                    timestamp="30 months ago"
                    channelImage="https://yt3.ggpht.com/g3IqVjrfuD4tufX8d5hUq27FgdvK6r7zra5_GtSMlQw5H50oK2zkdp3z98bG22Ry-sCWtSRk=s68-c-k-c0x00ffffff-no-rj"
                    channel="Movies TV"
                    image="https://i.ytimg.com/vi/BCIZmV2TqMk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBP5BGLKCxNg6ZReKhq57jyS3p0ow"
                  />
                  <VideoCard 
                    title="Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack"
                    views="10B Views"
                    timestamp="5 years ago"
                    channelImage="https://yt3.ggpht.com/MehoWv8wE9h6ptkL1vmRKhjDNKq2HvDcDRucCF9IPyl8-8LqR83OD1G2Oa1T64mAKGDa3zSS=s88-c-k-c0x00ffffff-no-rj"
                    channel="Wiz Khalifa"
                    image="https://i.ytimg.com/vi/RgKAFK5djSk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKSBxffahsLAYNRLOCDojwHygbUw"
                  />
              </div>
           </div>

    );
}

export default RecommendedVideos
