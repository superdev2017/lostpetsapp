import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage} from "../pages/login/login"
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from "../pages/register/register";
import { HomePage } from "../pages/home/home"
import { MyPetDetailPage} from "../pages/my-pet-detail/my-pet-detail"
import { MyPetEditPage } from "../pages/my-pet-edit/my-pet-edit"
import { FormsModule } from "@angular/forms"
import { CameraProvider } from '../providers/camera';
import { Camera } from "@ionic-native/camera"
@NgModule({
    declarations: [
        MyApp,
        HomePage,
        MyPetDetailPage,
        MyPetEditPage,
        LoginPage,
        RegisterPage,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        MyPetDetailPage,
        MyPetEditPage,
        LoginPage,
        RegisterPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        Camera,
        CameraProvider
    ]
})
export class AppModule {}
