package com.nativetest;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class NotePlayer extends ReactContextBaseJavaModule {

  private boolean isPlaying = false;

  public NotePlayer(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @ReactMethod
  public void playNote(double frequency) {
    this.isPlaying = true;
  }

  @ReactMethod
  public void stopNote() {
    this.isPlaying = false;
  }

  @Override
  public String getName() {
    return "NotePlayer";
  }
}
