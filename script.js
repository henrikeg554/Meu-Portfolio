document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
    const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
    card.style.setProperty('--mx', x + '%');
    card.style.setProperty('--my', y + '%');
  });
});

const fotoInput   = document.getElementById('foto-input');
const placeholder = document.getElementById('avatar-placeholder');
const avatarLabel = document.getElementById('avatar-label');

fotoInput.addEventListener('change', function () {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (e) {

    const img = document.createElement('img');
    img.src       = e.target.result;
    img.className = 'avatar';
    img.alt       = 'Foto de Guilherme Henrike';
    img.title     = 'Clique para trocar a foto';
    img.onclick   = () => fotoInput.click();

    placeholder.replaceWith(img);

    avatarLabel.textContent    = 'foto adicionada ✓';
    avatarLabel.style.color    = 'var(--accent)';

    showToast('foto adicionada com sucesso!');
  };

  reader.readAsDataURL(file);
});

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}