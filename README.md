## perp
For working with pipeware. Built on [pipeware](https://github.com/lukeburns/pipeware).

### Example
```
var fs = require('fs');
var zlib = require('zlib');
var perp = require('perp');
var app = perp();

app
.define('put')
.use(function (path) {
	if(path.indexOf('.gz') != -1) {
		return zlib.createGzip();
	}
})
.use(fs.createWriteStream)

app
.define('get')
.use(fs.createReadStream)
.use(function (path) {
	if(path.indexOf('.gz') != -1) {
		return zlib.createGunzip();
	}
})
```

Now you can do the following:

#### Gzip README.md
```
app.get('README.md').pipe(app.put('README.md.gz'));
```

#### Gunzip README and pipe to stdout
```
app.get('README.md.gz').pipe(process.stdout);
```

### Installation
```
npm install perp
```