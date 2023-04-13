echo "[TASK 1] ............................................."
apt-get update

echo "[TASK 2] ............................................."
apt-get install -y nfs-kernel-server

echo "[TASK 3] ............................................."
sudo mkdir -p /srv/nfs/kubedata
sudo mkdir -p /srv/nfs/kubedata/db
sudo mkdir -p /srv/nfs/kubedata/storage
sudo mkdir -p /srv/nfs/kubedata/logs

echo "[TASK 4] ............................................."
sudo chown nobody:nogroup /srv/nfs/kubedata
chmod -R 777 /srv/nfs/kubedata

echo "[TASK 5] ............................................."
cat >>/etc/exports<<EOF
/srv/nfs/kubedata   *(rw,sync,no_subtree_check,no_root_squash)
EOF

echo "[TASK 6] ............................................."
sudo exportfs -rav

echo "[TASK 7] ............................................."
sudo systemctl restart nfs-kernel-server

echo "[TASK 8] ............................................."
sudo systemctl restart nfs-server
