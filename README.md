grunt-git-ftp-include
=====================

used to generate the .git-ftp-include used for git-ftp by resmo


## Install
Load the task on your Grunt file:
```
grunt.loadNpmTasks('grunt-git-ftp-include');
```

## Configure the task:

```
includeFTP: {
	all: {
		files: [
			{dest: 'public/_dist/css/main-built.css', src: 'public/css/*.css'},
			{dest: 'public/_dist/js/main-built.js', src: 'public/js/**/*.js'},
			{src: ['**/*'], dest: 'public/_dist/img', expand: true, cwd: 'public/img'}
		]
	}
}
```

## Run
Run `$ grunt includeFTP` and a file `.git-ftp-include` will be generated