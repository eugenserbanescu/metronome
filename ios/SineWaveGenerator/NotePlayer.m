//
//  NotePlayer.m
//  nativeTest
//
//  Created by Serbanescu, Eugen on 02/10/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "TGSineWaveToneGenerator.m"
#import "NotePlayer.h"

@implementation NotePlayer
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(playNote: (double *) freq) {
  SoundGenerator = [TGSineWaveToneGenerator alloc];
  [SoundGenerator initWithFrequency:*freq];
  [SoundGenerator playThing];
}
RCT_EXPORT_METHOD(stopNote) {
  [SoundGenerator stopThing];
  SoundGenerator = nil;
}
@end

