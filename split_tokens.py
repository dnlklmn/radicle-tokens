import json
import os

# Define the path to the tokens.json file
tokens_path = 'src/tokens/tokens.json'

# Read the tokens.json file
with open(tokens_path, 'r') as file:
    tokens = json.load(file)

# Create a directory for the split files if it doesn't exist
output_dir = 'src/tokens/'
os.makedirs(output_dir, exist_ok=True)

# Define the keys to split by
keys_to_split = ['global', 'typography', 'light', 'dark']

# Split the tokens and write to separate files
for key in keys_to_split:
    if key in tokens:
        output_path = os.path.join(output_dir, f'{key}.json')
        with open(output_path, 'w') as outfile:
            json.dump({key: tokens[key]}, outfile, indent=2)
