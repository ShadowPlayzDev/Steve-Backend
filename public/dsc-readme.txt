Discord Theme Customization Guide

This guide will help you customize the appearance of your Discord using a theme hosted at https://steveow.vercel.app/discord.css.

Installation:
You will need a Discord client modification tool (like Vencord) installed on your computer to apply custom themes.

Applying the Theme:
In your client modification tool's settings, look for the QuickCSS editor or a theme section. You will need to import the following URL:

@import url("https://steveow.vercel.app/discord.css");

Customizing with Variables:
Below the @import line, you can customize the theme by overriding the following CSS variables in the :root block:

--app-zoom-level: PX
  Adjust the overall zoom level of Discord. Values are decimal numbers (e.g., 0.8 for 80%, 1.0 for 100%, 1.2 for 120%).
  Example:
  :root {
    --app-zoom-level: 0.8 !important;
  }

--hide-active-now: BOOLEAN
  Show or hide the "Active Now" sidebar.
  block = show
  none = hide
  Example:
  :root {
    --hide-active-now: block !important;
  }

--custom-font: FONT NAME
  Specify the font family you want to use. Make sure the font is installed on your computer.
  Example:
  :root {
    --custom-font: 'Roboto', sans-serif !important;
  }

--uppercase-text: BOOLEAN
  Make channel names and category headers uppercase.
  uppercase = on
  none = off
  Example:
  :root {
    --uppercase-text: uppercase !important;
  }

--minimal-dms: BOOLEAN
  Hide the text in the private channels list for a cleaner look (icons will still be visible).
  block = on (hide text)
  none = off (show text)
  Example:
  :root {
    --minimal-dms: block !important;
  }

Feel free to experiment with these variables to create your perfect Discord theme!
