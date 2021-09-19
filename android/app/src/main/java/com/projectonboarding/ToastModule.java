package com.projectonboarding;

import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

public class ToastModule extends ReactContextBaseJavaModule {

    public ToastModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "ToastModule";
    }

    // use tradition simple
    @ReactMethod
    public void showToast(String message) {
        Toast.makeText(getReactApplicationContext(), "" + message, Toast.LENGTH_SHORT).show();
    }

    // use Callback to excute function async
    @ReactMethod
    public void excuteCallback(String value, Callback successCallback, Callback failureCallback) {
        try {
            if (value.equalsIgnoreCase("DucVu")) {
                String send = "Callback success to JS";
                successCallback.invoke(send);
            } else {
                throw new Exception("Callback failure to JS");
            }
        } catch (Exception e) {
                failureCallback.invoke(e.getMessage());
        }
    }

    // use Promise -> can use async - await in JS
    @ReactMethod
    public void excutePromise(String value, Promise promise) {
        try {
            if (value.equalsIgnoreCase("DucVu")) {
                String send = "Promise success to JS";
                WritableMap mapObject = Arguments.createMap();
                mapObject.putString("valueReceived", value);
                mapObject.putString("valueSend", send);

                promise.resolve(mapObject); // need Object to transfer for JS

            }else{
                throw new Exception("Promise failure to JS");
            }
        } catch (Exception e) {
                promise.reject("error",e);
        }
    }
}
