package com.nativetest;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.media.AudioTrack;
import android.media.AudioFormat;
import android.media.AudioManager;

import java.lang.annotation.Target;

public class NotePlayer extends ReactContextBaseJavaModule {

  public NotePlayer(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @ReactMethod
  public void playNote(double frequency) {
    // AudioTrack definition
    int mBufferSize = AudioTrack.getMinBufferSize(44100,
            AudioFormat.CHANNEL_OUT_MONO,
            AudioFormat.ENCODING_PCM_8BIT);

    AudioTrack mAudioTrack = new AudioTrack(AudioManager.STREAM_MUSIC, 44100,
            AudioFormat.CHANNEL_OUT_MONO, AudioFormat.ENCODING_PCM_16BIT,
            mBufferSize, AudioTrack.MODE_STREAM);

    // Sine wave
    double[] mSound = new double[4410];
    short[] mBuffer = new short[22050];
    for (int i = 0; i < mSound.length; i++) {
      mSound[i] = Math.sin((2.0*Math.PI * i/(44100/frequency)));
      mBuffer[i] = (short) (mSound[i]*Short.MAX_VALUE);
    }

//    mAudioTrack.setStereoVolume(AudioTrack.getMaxVolume(), AudioTrack.getMaxVolume());
    mAudioTrack.setVolume((float) 0.9);
    mAudioTrack.play();

    mAudioTrack.write(mBuffer, 0, mSound.length);
    mAudioTrack.stop();
    mAudioTrack.release();
  }

  @ReactMethod
  public void stopNote() {}

  @Override
  public String getName() {
    return "NotePlayer";
  }
}
