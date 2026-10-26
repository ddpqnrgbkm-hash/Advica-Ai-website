# Going live: step-by-step setup

Three jobs, in this order. Allow about an hour, plus waiting time for the domain switch.

1. [Connect GitHub to Netlify](#1-connect-github-to-netlify) (the site goes live on a temporary address)
2. [Send form enquiries to office@advicaaisolutions.co.uk](#2-form-email-notifications)
3. [Point your IONOS domain at Netlify](#3-point-your-ionos-domain-at-netlify) **without touching your email**

> Netlify occasionally renames menu items. If a button isn't exactly where described, look for the closest match, or ask Claude.

---

## 1. Connect GitHub to Netlify

1. Go to **https://app.netlify.com/signup** and choose **Sign up with GitHub**. Use the GitHub account that owns the `Advica-Ai-website` repository, and approve the access request.
2. On the Netlify dashboard, click **Add new project** (sometimes **Add new site**), then **Import an existing project**.
3. Choose **GitHub**. If asked, click **Configure Netlify on GitHub** and allow access to the **Advica-Ai-website** repository (you can choose "Only select repositories").
4. Pick **Advica-Ai-website** from the list.
5. On the settings screen, leave everything as it is. The settings are read from the `netlify.toml` file, which should show:
   - Branch to deploy: `main`
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **Deploy**. After 1–2 minutes the status shows **Published** and you get a temporary address like `https://random-name-123.netlify.app`. Open it and check the site.
7. Give it a tidier temporary name: **Project configuration → General → Project details → Change project name**, then type e.g. `advica-ai`. Your temporary address becomes `https://advica-ai.netlify.app`. **Write this address down; you need it in step 3.**

From now on, every change saved to GitHub publishes automatically.

---

## 2. Form email notifications

The site has three forms: **contact** (enquiries), **estimate** (cost estimator) and **ai-readiness** (quiz).

### 2a. Turn on form detection
1. In your Netlify project, open **Forms** in the left menu.
2. If you see **Enable form detection**, click it.
3. Go to **Deploys**, click **Trigger deploy → Deploy project** (or **Deploy site**), and wait for **Published**.
4. Go back to **Forms**. You should now see `contact`, `estimate` and `ai-readiness` listed.

### 2b. Email every submission to the office
1. Go to **Project configuration → Notifications** (sometimes under **Site configuration**).
2. Under **Emails and webhooks → Form submission notifications**, click **Add notification → Email notification**.
3. Fill in:
   - **Event to listen for:** New form submission
   - **Email to notify:** `office@advicaaisolutions.co.uk`
   - **Form:** Any form
4. Click **Save**.

### 2c. Test it
1. Open your temporary address, go to **Contact**, and send a test enquiry.
2. You should land on the "Thanks — we've got your message" page.
3. Check the office inbox, including the **spam/junk folder**. The email comes from Netlify (usually `formresponses@netlify.com`). If it's in spam, mark it **Not spam** or add that address to your safe senders in IONOS webmail.
4. Do the same for the cost estimator and quiz (fill in your email at the end).

**Spam protection:** each form has a hidden "honeypot" field that catches bots, and Netlify filters spam automatically. Anything flagged appears under **Forms → (form name) → Spam submissions**.

**Limits:** Netlify's free plan includes a monthly allowance of form submissions. Check **Forms** occasionally; if you get close to the limit, Netlify will prompt you to upgrade.

---

## 3. Point your IONOS domain at Netlify

### ⚠️ Read this first: protect your email
Your email (office@advicaaisolutions.co.uk) runs on IONOS. You will change **only two records**: the website **A record** and a **www CNAME**. **Do not edit, delete or "reset" anything else.** In particular, leave these exactly as they are:

| Type | Host name | Value | What it does |
|---|---|---|---|
| MX | @ | `mx00.ionos.co.uk` | Receives your email — **keep** |
| MX | @ | `mx01.ionos.co.uk` | Receives your email (backup) — **keep** |
| TXT | @ | `v=spf1 include:_spf-eu.ionos.com ~all` | Stops your emails going to spam — **keep** |
| CNAME | _dmarc | `dmarc.ionos.co.uk` | Email security — **keep** |
| CNAME | autodiscover | `adsredir.ionos.info` | Sets up email on phones/Outlook — **keep** |
| TXT | @ | `google-site-verification=…` | Google Search Console — **keep** |
| NS | @ | `ns10xx.ui-dns…` | IONOS name servers — **keep** |

Do **not** switch to "Netlify DNS" or change name servers. That would move your email settings.

### 3a. Tell Netlify about the domain
1. In Netlify, go to **Domain management → Add a domain** (or **Add custom domain**).
2. Type `advicaaisolutions.co.uk` and click **Verify**, then **Add domain**.
3. If Netlify offers to use **Netlify DNS**, decline. Choose the option to keep DNS with your current provider ("external DNS").
4. Netlify will show "Awaiting external DNS" (or similar). That's expected.

### 3b. Change the records at IONOS
1. Log in at **https://my.ionos.co.uk** and go to **Domains & SSL**.
2. Click **advicaaisolutions.co.uk**, then the **DNS** tab.
3. **Change the A record (the website):**
   - Find the record of type **A** with host name **@** and value **`35.219.200.0`** (this points to your old website).
   - Click the **pencil/edit** icon.
   - Change **Points to** to **`75.2.60.5`** (Netlify's address).
   - Click **Save**.
   - If there is also an **AAAA** record with host name **@**, delete it. (When we checked on 26 October 2026 there wasn't one.)
4. **Add the www record:**
   - Click **Add record → CNAME**.
   - **Host name:** `www`
   - **Points to:** your Netlify address from step 1.7, e.g. `advica-ai.netlify.app`. Don't include `https://`.
   - Click **Save**.
   - If IONOS says a `www` record already exists, delete only that **www A/AAAA** record first, then add the CNAME. (When we checked, no www record existed.)

> **If IONOS won't let you edit the A record** and talks about the domain being "connected" to a product, click **Adjust destination** (or **Domain usage**). Choose the option to use your own DNS settings or IP address, then enter `75.2.60.5`. This only affects the website. Your mailbox is untouched.
>
> **If Netlify shows a different IP address** for the A record than `75.2.60.5`, use the one Netlify shows.

### 3c. Finish in Netlify
1. Changes usually take effect within 15–60 minutes, occasionally up to 48 hours.
2. In Netlify, go to **Domain management**. When both domains show as verified, open **HTTPS** and click **Verify DNS configuration**. Netlify then issues a free security certificate (the padlock) automatically.
3. Make sure `advicaaisolutions.co.uk` is set as the **Primary domain**, so `www.` addresses redirect to it.
4. Visit **https://advicaaisolutions.co.uk** and **https://www.advicaaisolutions.co.uk**. Both should show the new site with a padlock.
5. Test that old links redirect: **/our-mission** should go to **/about**, and **/intelligence-hub** to **/insights**.

### 3d. Check your email still works
1. Send an email **to** office@advicaaisolutions.co.uk from a personal address and check it arrives.
2. Reply **from** office@ and check it arrives without landing in spam.

If anything goes wrong with email, check that the MX, SPF, DMARC and autodiscover records in the table above are still exactly as listed.

### 3e. Tidy up (optional, after a week of everything working)
- The TXT record starting `fah-claim=` and your old Firebase project relate to the old website. They're harmless; you can remove them once you're happy with the new site.
- Submit your sitemap to Google: in **Google Search Console**, open your property, go to **Sitemaps**, enter `sitemap-index.xml` and click **Submit**.

---

## Before you switch the domain: checklist

- [ ] Booking link added (`bookingUrl` in `src/config/site.ts`)
- [ ] Test enquiry received in office@ inbox
- [ ] Estimator and quiz submissions received
- [ ] You've read every page on the temporary address and are happy with the wording
- [ ] Privacy policy and terms checked (ideally by your solicitor)
