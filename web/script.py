import sys
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from textblob import TextBlob
import nltk

nltk.download('vader_lexicon')

inputText = sys.argv[1]

if inputText:
    s = SentimentIntensityAnalyzer()
    score1 = s.polarity_scores(inputText)

    blob = TextBlob(inputText)
    score2 = blob.sentiment.polarity

    if score1['compound'] < 0 and score2 < 0:
        print("negative")
    elif score1['compound'] > 0 and score2 > 0:
        print("positive") 
    else:
        print("neutral")
else:
    print("None")


    

    
