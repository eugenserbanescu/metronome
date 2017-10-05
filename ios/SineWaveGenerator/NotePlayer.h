//
//  NotePlayer.h
//  nativeTest
//
//  Created by Serbanescu, Eugen on 02/10/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <React/RCTBridgeModule.h>

@interface NotePlayer : NSObject <RCTBridgeModule> {
  @public
  TGSineWaveToneGenerator *soundGenerator;
}

- (void)playNote:(double)freq;

- (void)stopNote;

@end


