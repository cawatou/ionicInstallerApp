import {ErrorHandler, NgModule}                   from '@angular/core';
import {Http, HttpModule}                         from '@angular/http';
import {BrowserModule}                            from '@angular/platform-browser';
import {Camera}                                   from '@ionic-native/camera';
import {SplashScreen}                             from '@ionic-native/splash-screen';
import {StatusBar}                                from '@ionic-native/status-bar';
import {IonicStorageModule, Storage}              from '@ionic/storage';
import {TranslateLoader, TranslateModule}         from '@ngx-translate/core';
import {TranslateHttpLoader}                      from '@ngx-translate/http-loader';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {Api}                                      from '../providers/api/api';
import {MyApp}                                    from './app.component';
import {Settings}                                 from '../providers/settings/settings';
import {Geolocation}                              from "@ionic-native/geolocation";
import {DatePickerModule}                         from 'ionic3-datepicker';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function HttpLoaderFactory(http:Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage:Storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new Settings(storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        HttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),
        DatePickerModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],
    providers: [
        Api,
        Geolocation,
        Camera,
        SplashScreen,
        StatusBar,
        {provide: Settings, useFactory: provideSettings, deps: [Storage]},
        // Keep this to enable Ionic's runtime error handling during development
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
