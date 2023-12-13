# How it works
There's two objects on a frictionless plane that collide with each other, and there's a wall in the back that one of the objects can bounce off of. If one object has a mass of one and the other object has a mass of a power of 100, the total number of collisions, including the wall, equals the digits of pi.

**Example:** 1 kg and 10,000 kg (100^2) for 3 digits of pi.

**Example:** 1kg and 100,000,000 kg (100^4) for 5 digits of pi.

For a more detailed explanation and information about the wall, watch this video (the inspiration and math needed for this project): https://www.youtube.com/watch?v=jsYwFizhncE

# Usage
The usage is very simple. I've included a Node.js version as well as a Python version, whichever you want to use. To change the number of digits you want to calculate, edit the file, and at the top is a variable named "digits," which you can edit. For Python, I might make it so you can just input how many you want to calculate after starting the script, but that has not been implemented yet.

Generally, the Node.js version is much faster in my testing since I've optimized it the most.

# Downside
While it is cool, since the process of caluclating all the collisions is based on the new velocities of the objects after the last collision, it has to run single-threaded because it has to wait for the last calucation to finish before it can do the next one. This makes it very inefficient and would take pretty much forever after going past more than just 10 to 12 digits. This would totally not be ideal for finding large amounts of digits in a normal circumstance.

It's also very possible that the script is inaccurate, as I've only tested up to 11 digits, so it may have errors beyond that point. But I still thought it was a cool concept, so that is why I did it.
