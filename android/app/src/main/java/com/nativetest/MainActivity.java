package com.nativetest;

import com.facebook.react.ReactActivity;
import android.media.AudioManager;
import android.os.Bundle;
import android.os.PersistableBundle;
import android.support.annotation.Nullable;

public class MainActivity extends ReactActivity {
  @Override
  public void onCreate(@Nullable Bundle savedInstanceState, @Nullable PersistableBundle persistentState) {
    super.onCreate(savedInstanceState, persistentState);
    this.setVolumeControlStream(AudioManager.STREAM_MUSIC);
  }

  /**
   * Returns the name of the main component registered from JavaScript.
   * This is used to schedule rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "nativeTest";
  }
}
