# photo-album
Photo album is an exercise that demonstrates accessing a remote API via command line.

## Requirements
[Node.js](https://nodejs.org)

[Yarn](https://yarnpkg.com) (optional)

## Installation

Install dependencies using npm

```bash
npm install
```
or yarn

```bash
yarn
```

Next, to make this globally available via cli, first set file permissions for the script


```bash
chmod u+x photo-album.js
```

and link the project with npm

``` bash
npm link
```

or yarn

``` bash
yarn link
```

## Usage

```bash
photo-album <albumid>
```

The script can also be run directly with node if choosing not to perform the link step above.

```bash
node photo-album <albumid>
