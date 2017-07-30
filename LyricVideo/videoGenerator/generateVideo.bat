@echo off


SET /a paramcount=1
:paramloop
SET "param%paramcount%=%~1"
IF DEFINED param%paramcount% SET /a paramcount+=1&shift&GOTO paramloop
SET /a paramcount -=1

SET PHANTOM_BINARY=%param1%
SET PHANTOM_SCRIPT=%param2%
SET GENERATED_FRAMES=%param3%
SET FFMPEG_BINARY=%param4%
SET VIDEO_SILENT=%param5%
SET MP3=%param6%
SET VIDEO=%param7%
SET FIRST_FRAME=%param8%
SET LAST_FRAME=%param9%
SET WIDTH=%param10%
SET HEIGHT=%param11%
SET FPS=%param12%
SET VIDEO_SCRIPT=%param13%



@echo %time%

MKDIR %GENERATED_FRAMES%
%PHANTOM_BINARY% %PHANTOM_SCRIPT% %FIRST_FRAME% %LAST_FRAME% %GENERATED_FRAMES% %FPS% %WIDTH% %HEIGHT% %VIDEO_SCRIPT%
REM %FFMPEG_BINARY% -i %GENERATED_FRAMES%image_%%05d.jpg -framerate %FPS% -c:v libx264 -preset slow -crf 1 -pix_fmt yuv420p -y %VIDEO_SILENT%
%FFMPEG_BINARY% -r %FPS% -i %GENERATED_FRAMES%image_%%05d.jpg -c:v libx264 -preset slow -crf 1 -pix_fmt yuv420p -y %VIDEO_SILENT%
%FFMPEG_BINARY% -r %FPS% -i %VIDEO_SILENT% -i %MP3% -c:v copy -c:a copy -y %VIDEO%
DEL %VIDEO_SILENT%
RMDIR /S/Q %GENERATED_FRAMES%

@echo %time%

exit