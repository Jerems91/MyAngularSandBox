@echo off

set ASPNETCORE_ENVIRONMENT=Development

set /p PROJET="Nom du projet : "

cd %PROJET%

dotnet run
