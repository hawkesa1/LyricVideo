@echo off

SET ROOT_LOCATION=C:\Users\Hawkes\GitRepoLyricVideo\LyricVideo
SET PHANTOM_BINARY=%ROOT_LOCATION%\phantomJS\phantomjs-2.1.1-windows\bin\phantomjs
SET PHANTOM_SCRIPTS=%ROOT_LOCATION%\phantomJS\phantomScripts
SET GENERATED_FRAMES=%ROOT_LOCATION%\videoGenerator\frames\render1\
SET FFMPEG_BINARY=%ROOT_LOCATION%\ffmpeg\ffmpeg\bin\ffmpeg
SET VIDEO_SILENT=%ROOT_LOCATION%\videoGenerator\videoSilent
SET MP3=%ROOT_LOCATION%\videoGenerator\mp3
SET VIDEO=%ROOT_LOCATION%\videoGenerator\video

@echo %time%


%PHANTOM_BINARY% %PHANTOM_SCRIPTS%\test2.js 1 1200 %GENERATED_FRAMES% %FPS% 1920 1080


@echo %time%