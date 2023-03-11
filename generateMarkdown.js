module.exports = function (data){

let license = link = "";

switch(data.license){
    case "cc": license ='Creative Commons license family'; link = "https://creativecommons.org/licenses/";  break;
    case "ecl-2.0": license = "Educational Community License v2.0" ; link = "https://opensource.org/license/ecl2-php/"; break;
    case "osl-3.0": license = "Open Software License 3.0"; link = "https://opensource.org/licenses/"; break;
    
}





    return `
# **${data.name_of_project}**  

  
  


---





## *Table of Contents*

    * Description  

    * Installation Instructions  

    * Data Usage Information  

    * Contributary Guidelines  

    * Instructions  

    * Questions  

    * License  
  
    * README Preview  
  
    * DEMO Video  
  



  
  

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
      
      
      
### *README Preview*  
  
    ${data.image_link}  
      
      
### *DEMO Video*  
  

    ${data.video_link}

      
      

### *License*  

${license}
[${link}](${link})

    
`;

}
