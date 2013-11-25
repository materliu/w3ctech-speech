


ChromeCacheView v1.46
Copyright (c) 2008 - 2012 Nir Sofer
Web site: http://www.nirsoft.net



Description
===========

ChromeCacheView is a small utility that reads the cache folder of Google
Chrome Web browser, and displays the list of all files currently stored
in the cache. For each cache file, the following information is
displayed: URL, Content type, File size, Last accessed time, Expiration
time, Server name, Server response, and more.
You can easily select one or more items from the cache list, and then
extract the files to another folder, or copy the URLs list to the
clipboard.



The Location Of Chrome Cache Folder
===================================

The cache folder of Google Chrome is located under [User Profile]\Local
Settings\Application Data\Google\Chrome\User Data\Default\Cache



System Requirements
===================


* This utility works on any version of Windows, starting from Windows
  2000, and up to Windows 7/2008.



Using ChromeCacheView
=====================

ChromeCacheView doesn't require any installation process or additional
DLL files. Simply copy the executable file (ChromeCacheView.exe) to any
folder you like, and run it.
After you run it, the main window displays the list of files currently
stored in the cache of the default Google Chrome user.
You can select one or more cache files from the list, and than export the
list into text/html/xml file ('Save Selected Items' option), copy the URL
list to the clipboard (Ctrl+U), copy the entire table of cache files
(Ctrl+C), and then paste it to Excel or to OpenOffice spreadsheet. You
can also extract the actual files from the cache, and save them into
another folder, You can do that by using the 'Copy Selected Cache Files
To' option (F4).



Versions History
================


* Version 1.46:
  o Fixed bug: ChromeCacheView failed to decompress some of the files
    compressed with gzip.
  o Fixed issue: ChromeCacheView left multiple files under the temp
    folder when extracting files compressed with gzip.

* Version 1.45:
  o ChromeCacheView now loads the cache items much faster and with
    less memory usage, especially if you have a large amount of items in
    the cache.

* Version 1.40:
  o Added 'Stop' menu item, which allows you to stop the loading
    process of the cache files list.

* Version 1.35:
  o Added 'Load only cache files from the last xx days' option (In
    'Select Cache Folder' window).
  o Added 'Load only cache files in the following time range' option
    (In 'Select Cache Folder' window).

* Version 1.30:
  o Added 'Open Selected Cache File' option, which opens the selected
    cache file with the default file viewer.
  o Added 'Double-Click Action' option, which allows you to choose
    what to do when you double-click on cache item.

* Version 1.27:
  o The status bar now displays the total size of selected files in
    KB/MB.

* Version 1.26:
  o Fixed ChromeCacheView to read the cache when the latest version
    of Chrome is opened and locks the cache files.

* Version 1.25:
  o Added /copycache command-line option, which allows you to extract
    files from the cache without displaying any user interface.
  o Also added /CopyFilesFolder, /UseWebSiteDirStructure, and
    /NewNameIfExist command-line options, for using with the /copycache
    command-line option.

* Version 1.22:
  o Made a small fix that hopefully will solve a crash problem that
    some users experienced.

* Version 1.21:
  o Fixed bug: ChromeCacheView failed to copy cache files because the
    filenames contained invalid file characters (?, :, *, |, and others).

* Version 1.20:
  o Added new option in 'Copy Selected Cache Files': Update the
    modified time of the copied files according to modified time in the
    Web server.

* Version 1.15:
  o Added support for working with the cache files of Chrome 2.x

* Version 1.10:
  o Added 'Show Zero-Length Files' option.
  o Added fileter by file type. (text/html, image, audio, video,
    application)

* Version 1.05
  o New option in 'Copy Selected Files To...': Save the files in the
    directory structure of the Web site.

* Version 1.00 - First release.



Command-Line Options
====================



/stext <Filename>
Save the list of all cache files into a regular text file.

/stab <Filename>
Save the list of all cache files into a tab-delimited text file.

/scomma <Filename>
Save the list of all cache files into a comma-delimited text file.

/stabular <Filename>
Save the list of all cache files into a tabular text file.

/shtml <Filename>
Save the list of all cache files into HTML file (Horizontal).

/sverhtml <Filename>
Save the list of all cache files into HTML file (Vertical).

/sxml <Filename>
Save the list of all cache files to XML file.

-folder <Cache Folder>
Start ChromeCacheView with the specified cache folder.

/copycache <URL> <Content Type>
Copy files from the cache into the folder specified in /CopyFilesFolder
parameter. In the <URL> parameter, you can specify the URL of the Web
site (for example: http://www.nirsoft.net) or empty string ("") if you
want to copy files from all Web sites. In the <Content Type> parameter,
you can specify full content type (like image/png), partial content type
(like 'image') or empry string ("") if you want to copy all types of
files.

/CopyFilesFolder <Folder>
Specifies the folder to copy the cache files.

/UseWebSiteDirStructure 0 | 1
Save the files in the directory structure of the Web site. 0 = No, 1 = Yes

/UpdateModifiedTime 0 | 1
Update the modified time of the copied files according to modified time
in the Web server. 0 = No, 1 = Yes

/NewNameIfExist 0 | 1
Copy as new name if filename already exists. 0 = No, 1 = Yes

Examples:
ChromeCacheView.exe -folder "F:\Documents and
Settings\Administrator\Local Settings\Application Data\Google\Chrome\User
Data\Default\Cache"
ChromeCacheView.exe -folder "F:\Documents and Settings\User1\Local
Settings\Application Data\Google\Chrome\User Data\Default\Cache" /shtml
c:\temp\chrm.html
ChromeCacheView.exe /stext c:\temp\chrm.txt

Copy Cache Examples:
* Copy all cache files of www.nirsoft.net to f:\temp in the directory
  structure of the Web site:
  /copycache "http://www.nirsoft.net" "" /CopyFilesFolder "f:\temp"
  /UseWebSiteDirStructure 1


* Copy all image cache files of www.nirsoft.net to f:\temp:
  /copycache "http://www.nirsoft.net" "image" /CopyFilesFolder "f:\temp"
  /UseWebSiteDirStructure 0


* Copy all .png files from the cache to f:\temp:
  /copycache "" "image/png" /CopyFilesFolder "f:\temp"
  /UseWebSiteDirStructure 0


* Copy all files from the cache to f:\temp:
  /copycache "" "" /CopyFilesFolder "f:\temp" /UseWebSiteDirStructure 0





Translating ChromeCacheView to other languages
==============================================

In order to translate ChromeCacheView to other language, follow the
instructions below:
1. Run ChromeCacheView with /savelangfile parameter:
   ChromeCacheView.exe /savelangfile
   A file named ChromeCacheView_lng.ini will be created in the folder of
   ChromeCacheView utility.
2. Open the created language file in Notepad or in any other text
   editor.
3. Translate all string entries to the desired language. Optionally,
   you can also add your name and/or a link to your Web site.
   (TranslatorName and TranslatorURL values) If you add this information,
   it'll be used in the 'About' window.
4. After you finish the translation, Run ChromeCacheView, and all
   translated strings will be loaded from the language file.
   If you want to run ChromeCacheView without the translation, simply
   rename the language file, or move it to another folder.



License
=======

This utility is released as freeware. You are allowed to freely
distribute this utility via floppy disk, CD-ROM, Internet, or in any
other way, as long as you don't charge anything for this. If you
distribute this utility, you must include all files in the distribution
package, without any modification !



Disclaimer
==========

The software is provided "AS IS" without any warranty, either expressed
or implied, including, but not limited to, the implied warranties of
merchantability and fitness for a particular purpose. The author will not
be liable for any special, incidental, consequential or indirect damages
due to loss of data or any other reason.



Feedback
========

If you have any problem, suggestion, comment, or you found a bug in my
utility, you can send a message to nirsofer@yahoo.com
