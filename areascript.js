
<script>
  // বিভাগ বাটনে ক্লিক করলে জেলা দেখাবে
  const categoryBtns = document.querySelectorAll('.category-btn');
  const districtLists = document.querySelectorAll('.district-list');

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      districtLists.forEach(list => {
        if(list.getAttribute('data-category') === cat){
          list.style.display = list.style.display === 'block' ? 'none' : 'block';
        } else {
          list.style.display = 'none';
        }
      });
    });
  });

  // জেলা বাটনে ক্লিক করলে উপজেলা দেখাবে
  const districtBtns = document.querySelectorAll('.district-btn');
  districtBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const upazilaList = btn.nextElementSibling;
      if(upazilaList.style.display === 'block'){
        upazilaList.style.display = 'none';
      } else {
        upazilaList.style.display = 'block';
      }
    });
  });

  // সার্চ বার ফিল্টার (জেলা ও উপজেলা উভয়ই)
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toLowerCase();
    districtLists.forEach(list => {
      let districtMatch = false;
      const districts = list.querySelectorAll('.district-btn');
      districts.forEach(district => {
        const districtName = district.textContent.toLowerCase();
        const upazilas = district.nextElementSibling.querySelectorAll('.upazila-btn');
        let upazilaMatch = false;

        upazilas.forEach(upazila => {
          if(upazila.textContent.toLowerCase().includes(filter)){
            upazila.style.display = '';
            upazilaMatch = true;
          } else {
            upazila.style.display = 'none';
          }
        });

        if(districtName.includes(filter) || upazilaMatch){
          district.style.display = '';
          district.nextElementSibling.style.display = upazilaMatch ? 'block' : 'none';
          districtMatch = true;
        } else {
          district.style.display = 'none';
          district.nextElementSibling.style.display = 'none';
        }
      });
      list.style.display = districtMatch ? 'block' : 'none';
    });
  });
</script>
