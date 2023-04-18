## Nifty Gateway drawing bot [NO LONGER WORKS]

### Setup

Run `npm i`

Create a `config.json` file with your accounts in it, formatted like this:

```json
{
  "users": [
    {
      "profileUrl": "user1",
      "twofa_token": "U62STNO55TWBCUZ",
      "twofa_code": "60253",
      "token": "fxB0QSVTI1JggEmQMHbF6gNSRcUHxE"
    },
    {
      "profileUrl": "user2",
      "twofa_token": "B7IMFOX8LZGMBY1",
      "twofa_code": "097502",
      "token": "UNYCndN1YQeTM6AnM4VOp08etFrMCE"
    }
  ]
}
```

Create a `.env` file with your CC info:

```env
CC_TOKEN=card_1GERTNWGOGNWER25
FINGERPRINT=BhAcYUkWJoQvImQf
```

## Usage

`node getNifties`: Gets all nifties for all accounts.

`node enterDrawing <contactAddress>`: Enters a drawing with a contact address of &lt;contactAddress&gt; with all your accounts.

`node makeRequest <reqType> <url>`: Makes a request with all accounts with a type of &lt;reqType&gt;, can be `get`, `post`, `put`, or `delete`.
