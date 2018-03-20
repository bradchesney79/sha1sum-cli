# sha1sum-cli
Cross Platform CLI File SHA-1 Hash Generator

Install Globally:

```$ npm install -g sha1sum-cli```

Usage:

```$ sha1sum \[path/\]filename```

Display help:

```$ sha1sum -h```
```$ sha1sum --help```

So, this is a command line npm package that simulates the sha1sum command on linux.

Since I am, unfortunately, developing on Windows to run on linux I cannot use the same checksum hash utility.

I have reasonable suspicion that node will be wherever I need to build. That simple.

While the tool I built is probably inferior to the real deal, it meets my needs and I suppose it is better than the nothing I found before I built it.

Feel free to improve it or build something yourself should it be insufficient.

I've left my work both as free as in speech and free as in beer as I could manage, mind the dependencies licenses as need be.

P.S. 
The way I actually install it:

```$ npm install --save-dev sha1sum-cli```

The ways I actually use it:

```$ node node_modules/sha1sum/bin/sha1sum.js \[path/\]filename```

```$ sed -i s/%REPLACEABLE_BUILD_VERSION_HASH%/`node node_modules/sha1sum/bin/sha1sum.js \[path/\]filename`/g```
