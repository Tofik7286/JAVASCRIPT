from gtts import gTTS
# import playsound
text = input("Enter Text")
sound = gTTS(text,lang='en')
sound.save("1.mp3")
