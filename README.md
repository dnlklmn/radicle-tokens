# Radicle Design Tokens
Style primitives for the Radicle web interface

### Token API
**Global Colors:** entire ranges of colors referenced by semantic/alias tokens
* the number in the token names refers to the luminosity of the color: the bigger the darker (500 in the middle)

**Semantic Colors:** 
* Background: for everything that is full screen and serves as a background for an interface
* Foreground: for texts and icons
* Border: for borders of UI elements
* Fill: for UI elements that sit on top of the backgrounds

### Use in Figma
Get the [Tokens Studio](https://tokens.studio/) plugin and pull tokens from this repo:
repo: ```dnlklmn/radicle-tokens``` | branch: ```main``` | file path: ```src/tokens/tokens.json```

Turn on the token sets you'd like to use

### Use in code
CSS variables get exported when tokens are updated
