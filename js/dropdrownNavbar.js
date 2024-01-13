document.addEventListener("DOMContentLoaded", function() {
    setupDropdown("dropdownBtn1", "dropdownContent1");
    setupDropdown("dropdownBtn2", "dropdownContent2");
  });
  
  function setupDropdown(btnId, contentId) {
    var dropdownBtn = document.getElementById(btnId);
    var dropdownContent = document.getElementById(contentId);
  
    if (dropdownBtn && dropdownContent) {
      dropdownBtn.addEventListener("click", function() {
        dropdownContent.classList.toggle("hidden");
      });
  
      // Close dropdown when clicking outside of it
      document.addEventListener("click", function(event) {
        if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
          dropdownContent.classList.add("hidden");
        }
      });
    } else {
      console.error("Dropdown button or content not found. Check your HTML IDs.");
    }
  }
  