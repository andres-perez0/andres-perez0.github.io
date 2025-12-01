from email import policy
from email.parser import BytesParser

# load the file
path = '/mnt/data/SENIOR - CREATE _ CIVIL SPOTLIGHT _ December 1st.eml'
with open(path, 'rb') as f:
    msg = BytesParser(policy=policy.default).parse(f)

# get html part
html = None
for part in msg.walk():
    if part.get_content_type() == 'text/html':
        html = part.get_payload(decode=True).decode(errors='ignore')
        break

# Save html to file
outpath = '/mnt/data/newsletter.html'
with open(outpath, 'w', encoding='utf-8') as f:
    f.write(html if html else '')

outpath