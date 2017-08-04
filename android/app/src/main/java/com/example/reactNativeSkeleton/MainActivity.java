package com.example.reactNativeSkeleton;

import android.view.View;

import com.facebook.react.ReactActivity;

import javax.annotation.Nullable;

/**
 * Single RN hosting activity.
 * Full screen immersive UI style hosting a full screen RN view.
 */
public class MainActivity extends ReactActivity {
    /**
     * @return the RN component name or our app.
     */
    @Nullable
    @Override
    protected String getMainComponentName() {
        return "ReactNativeSkeleton";
    }

    /**
     * Ensures that we are still in the immersive UI mode whenever we get focus.
     */
    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);

        if(hasFocus) {
            getWindow()
                .getDecorView()
                .setSystemUiVisibility(
                    View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                    | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                    | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                    | View.SYSTEM_UI_FLAG_FULLSCREEN
                    | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                );
        }
    }
}
