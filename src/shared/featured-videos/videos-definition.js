const camxVideos = [
    // {
    //   id: 'quiet-game',
    //   ref: 'quietGame',
    //   name: 'QUIET GAME',
    //   content: {
    //     intro: [
    //       'Gives you speed, accuracy, and no noise. We don’t focus just on speed, because that would only yield noise and more vibration.',
    //       'Inboard cam system and swing arm technology - gives you speed, gives you accuracy, but doesn’t give you noise.',
    //       'Show the video with Paul demoing the other crossbows compared to A4.'
    //     ],
    //     list: []
    //   },
    //   videoList: [
    //     {
    //       name: 'QUIET-GAME',
    //       desktopVideo: 'https://s3.amazonaws.com/camx/videos/a4/A4_QuietGame_Desktop.mp4',
    //       desktopVideoPoster: 'https://s3.amazonaws.com/camx/videos/a4/A4_QuietGame_Desktop_Poster.jpg',
    //       mobileVideo: '',
    //       mobileVideoPoster: ''
    //     }
    //   ]
    // },
    // {
    //   id: 'assembly',
    //   ref: 'assembly',
    //   name: 'ASSEMBLY',
    //   content: {
    //     intro:[
    //       'Right out of the box, in just two simple steps, that take about 35 seconds, your CamX crossbow is ready to head into the woods for a great hunt! It is already scoped, tuned, and ready to go!'
    //     ],
    //     list: [
    //       'Comfortek stock comes with Monobloc scope mounted',
    //       'Guaranteed Performance Test attached - shows the actual shot results; speed, date, tech that performed the test. 4 arrows shooting less than 1 inch within a 20 yard circle.',
    //       'Guarantees that your Arc Scope is fully sighted in for 10 to 100 yards',
    //       'Bow is fully assembled - Stirrup is already pre-mounted and Inboard Cams are already pre-strung with WC',
    //       'Shim kit to change the length and pull of your crossbow stock. If you want to make it longer or shorter based on your preference.',
    //       'Cocking Sled and Quivers'
    //     ]
    //   },
    //   videoList: [
    //     {
    //       name: 'ASSEMBLY',
    //       desktopVideo: 'https://s3.amazonaws.com/camx/videos/a4/A4_Assembly_Desktop.mp4',
    //       desktopVideoPoster: 'https://s3.amazonaws.com/camx/videos/a4/A4_Assembly_Desktop_Poster.jpg',
    //       mobileVideo: '',
    //       mobileVideoPoster: ''
    //     }
    //   ]
    // },
    // {
    //   id: 'arc-scope',
    //   ref: 'arcScope',
    //   name: 'ARC SCOPE',
    //   content: {
    //     intro:[
    //       'The A4 uses an industry leading 4 powered magnification optic with short eye relief. The A4’s Short Eye Relief has a natural cheek weld, and allows an extremely quick target acquisition without having to draw your head back or forward to adjust. Your target accurately appears where it is supposed to be.',
    //       '10 to 50 yards (hunting zone) are illuminated which allows for better shots in darker lighting. 70 to 100 yards (recreational) are chevrons which allow you to train at farther distances so you can nail your closer shots much easier.'
    //     ],
    //     list: []
    //   },
    //   videoList: [
    //     {
    //       name: 'ARC-SCOPE',
    //       desktopVideo: 'https://s3.amazonaws.com/camx/videos/a4/A4_Scope_Desktop.mp4',
    //       desktopVideoPoster: 'https://s3.amazonaws.com/camx/videos/a4/A4_Scope_Desktop_Poster.jpg',
    //       mobileVideo: '',
    //       mobileVideoPoster: ''
    //     }
    //   ]
    // },
    // {
    //   id: 'swing-arm',
    //   ref: 'swingArm',
    //   name: 'SWINGARM',
    //   content: {
    //     intro:[
    //       'Engineered for a gentle finish at the bottom of the shot. When the crossbow is cocked, the cam position is past 90 degrees. When the arrow travels forward, the suspension system catches up to the shot after the string has hit the bumper pad one time. Hardly any noise or any vibration, while still generating 370 FPS.'
    //     ],
    //     list: []
    //   },
    //   videoList: [
    //     {
    //       name: 'SWINGARM',
    //       desktopVideo: 'https://s3.amazonaws.com/camx/videos/a4/A4_SwingArm_Desktop.mp4',
    //       desktopVideoPoster: 'https://s3.amazonaws.com/camx/videos/a4/A4_SwingArm_Desktop_Poster.jpg',
    //       mobileVideo: '',
    //       mobileVideoPoster: ''
    //     }
    //   ]
    // },
    // {
    //   id: 'thumbsaver',
    //   ref: 'thumbsaver',
    //   name: 'THUMBSAVER',
    //   content: {
    //     intro:[
    //       'Two important safety features are included on the A4. The original protects your fingers for the entire flight path of the arrow. The thumbsaver 2 protects you from the cables as well if you like to position your hand towards the front side.'
    //     ],
    //     list: []
    //   },
    //   videoList: [
    //     {
    //       name: 'THUMBSAVER',
    //       desktopVideo: 'https://s3.amazonaws.com/camx/videos/a4/A4_Thumbsaver_Desktop.mp4',
    //       desktopVideoPoster: 'https://s3.amazonaws.com/camx/videos/a4/A4_Thumbsaver_Desktop_Poster.jpg',
    //       mobileVideo: '',
    //       mobileVideoPoster: ''
    //     }
    //   ]
    // },
    {
      id: 'shooting-sticks',
      ref: 'shootingSticks',
      name: 'SHOOTING STICKS',
      content: {
        intro:[
          'If you’re a hunter that likes to shoot with a rock solid base, on the bottom of the A4, there is a receiver bushing for a ¼ 20 tap shooting stick.'
        ],
        list: []
      },
      videoList: [
        {
          name: 'SHOOTING-STICKS',
          desktopVideo: 'https://s3.amazonaws.com/camx/videos/a4/A4_ShootingSticks_Desktop.mp4',
          desktopVideoPoster: 'https://s3.amazonaws.com/camx/videos/a4/A4_ShootingSticks_Desktop_Poster.jpg',
          mobileVideo: '',
          mobileVideoPoster: ''
        }
      ]
    },
    // {
    //   id: 'cocking-decocking',
    //   ref: 'cockingDecocking',
    //   name: 'COCKING & DECOCKING',
    //   content: {
    //     intro:[
    //       'The A4 comes with a cocking sled that guarantees even limb load and a safe cocking effort. The auto return thumbsaver engages to ensure safe conditions to load your arrow. Not only do you have full hand protection from the string on the entire flight path of the arrow from above, but also from below with the thumbsaver 2.',
    //       'Align your arrow’s vein with the visible notch to ensure it is loaded properly. With the A4, you are in total control and safe while decocking your crossbow in a few simple easy steps.'
    //     ],
    //     list: []
    //   },
    //   videoList: [
    //     {
    //       name: 'COCKING',
    //       desktopVideo: 'https://s3.amazonaws.com/camx/videos/a4/A4_CockingLoading_Desktop.mp4',
    //       desktopVideoPoster: 'https://s3.amazonaws.com/camx/videos/a4/A4_CockingLoading_Desktop_Poster.jpg',
    //       mobileVideo: '',
    //       mobileVideoPoster: '',
    //     },
    //     {
    //       name: 'DECOCKING',
    //       desktopVideo: 'https://s3.amazonaws.com/camx/videos/a4/A4_Decocking_Desktop.mp4',
    //       desktopVideoPoster: 'https://s3.amazonaws.com/camx/videos/a4/A4_Decocking_Desktop_Poster.jpg',
    //       mobileVideo: '',
    //       mobileVideoPoster: ''
    //     }
    //   ]
    //
    //
    // },
    // {
    //   id: 'price-tag',
    //   ref: 'priceTag',
    //   name: 'A4 PRICE TAG',
    //   content: {
    //     intro:[
    //       'For $1149.99 – speed, accuracy, quietness, ease of assembly, ease of reloading, durability, safety, immediate high performance out of the box. We deliver the complete package of everything that you want in a crossbow.',
    //       'Elaborate on the testing involved. This is not a cookie-cutter approach. There is more time and effort that go into each and every CamX A4 to ensure a customer’s success in the field.',
    //       'Each and every CamX trigger is thoroughly tested prior to being installed in the stock and additionally through actual live fire testing on the range.  Live fire testing gives us that real world human element allowing our technicians to not only insure safe operation but that your trigger “feels” correct.  No other crossbow manufacture evaluates and touches each and every trigger the way we do at CamX.'
    //     ],
    //     list: []
    //   },
    //   videoList: [
    //     {
    //       name: 'PRICE-TAG',
    //       desktopVideo: 'https://s3.amazonaws.com/camx/videos/a4/A4_PriceTag_Desktop.mp4',
    //       desktopVideoPoster: 'https://s3.amazonaws.com/camx/videos/a4/A4_PriceTag_Desktop_Poster.jpg',
    //       mobileVideo: '',
    //       mobileVideoPoster: ''
    //     }
    //   ]
    // },

];

export default camxVideos;
