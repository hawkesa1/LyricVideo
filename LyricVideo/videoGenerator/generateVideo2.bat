@echo off

SET ROOT_LOCATION=C:\Users\Hawkes\GitRepoLyricVideo\LyricVideo
SET PHANTOM_BINARY=%ROOT_LOCATION%\phantomJS\phantomjs-2.1.1-windows\bin\phantomjs
SET PHANTOM_SCRIPTS=%ROOT_LOCATION%\phantomJS\phantomScripts
SET GENERATED_FRAMES=H:\VideoRecorder\frames\render1\
SET FFMPEG_BINARY=%ROOT_LOCATION%\ffmpeg\ffmpeg\bin\ffmpeg
SET VIDEO_SILENT=%ROOT_LOCATION%\videoGenerator\videoSilent
SET MP3=%ROOT_LOCATION%\videoGenerator\mp3
SET VIDEO=%ROOT_LOCATION%\videoGenerator\video

@echo %time%

SET FPS=60

MKDIR %GENERATED_FRAMES%
%PHANTOM_BINARY% %PHANTOM_SCRIPTS%\takeLoadsOfScreenshots2.js 0 5000 %GENERATED_FRAMES% %FPS% 800 600
REM %FFMPEG_BINARY% -i %GENERATED_FRAMES%image_%%05d.jpg -framerate %FPS% -c:v libx264 -preset slow -crf 1 -pix_fmt yuv420p   -y %VIDEO_SILENT%\out1.mp4
%FFMPEG_BINARY% -r %FPS% -i %GENERATED_FRAMES%image_%%05d.jpg -c:v libx264 -preset slow -crf 1 -pix_fmt yuv420p   -y %VIDEO_SILENT%\out1.mp4
%FFMPEG_BINARY% -r %FPS% -i %VIDEO_SILENT%\out1.mp4 -i %MP3%\6fa4185a68511c928713a54a45df00bc.MP3 -c:v copy -c:a copy -y %VIDEO%\output3.mp4

DEL %VIDEO_SILENT%\out1.mp4
RMDIR /S/Q %GENERATED_FRAMES%

@echo %time%