module.exports = function (data) {

    let license = link = "";
    let badgeColor = "";
    let badgeTitle = ""

    switch (data.license) {
        case "cc":
            license = 'Creative Commons license family';
            link = "https://creativecommons.org/licenses/";
            badgeTitle = "CC"
            badgeColor ="blue"
            break;
        case "ecl-2.0":
            license = "Educational Community License v2.0";
            link = "https://opensource.org/license/ecl2-php/";
            badgeTitle ="ECL_2.0"
            badgeColor = "red"
            break;
        case "osl-3.0":
            license = "Open Software License 3.0";
            link = "https://opensource.org/licenses/";
            badgeTitle = "OSL_3.0"
            badgeColor = "yellow"
            break;
    }

    var badge = `![](https://img.shields.io/badge/License-${data.license}-${badgeColor})`



    return `
# **${data.name_of_project}**  

 ${badge} 
  


---





## *Table of Contents*

* [Description](#description)

* [Installation Instructions](#installation-instructions)

* [Data Usage Information](#data-usage-information)  

* [Contributary Guidelines](#contribution-guidelines)  

* [Instructions](#instructions)  

* [Questions](#questions)  

* [License](#license)   
  
      
  



  
  

### *Description*  


    ${data.description}  
  
  

### *Installation Instructions*  


    ${data.installation_instructions}  
  
  

### *Data Usage Information*  
  

    ${data.usage_information}  
  
  

### *Contribution Guidelines*  
  

    ${data.contribution_guidelines}  
  
  

### *Instructions*  
  

    ${data.test_instructions}  
  
  

### *Questions*  
  

    1. GitHub user name: ${data.questions_user_name}  

    2. GitHub Profile: ${data.questions_github_link}  

    3. Contact Email: ${data.questions_email} 
      
      
      


      
      

### *License*  
This project is licensed under the [${license}](${link})

    
`;

}
