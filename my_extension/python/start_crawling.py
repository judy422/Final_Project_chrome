
# import subprocess

# subprocess.run(['python', 'crawler.py'], check=True)
import subprocess

try:
    result = subprocess.run(['python', 'crawler.py'], check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    output = result.stdout
    error = result.stderr

    if output:
        print("Crawler output:", output)
    if error:
        print("Crawler error:", error)
except subprocess.CalledProcessError as e:
    print("Error running crawler.py:", e)

subprocess.run(['python', '/Users/angela/Downloads/python2023_finalproject-main 6/my_extension/python/crawler.py'], check=True)
