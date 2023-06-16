NGINXROOT="/usr/share/nginx/mirasahi/"
if [ "$EUID" != "0" ]
then
	echo "Necesitas permisos de administrador para instalar"
	exit 1
fi

for i in ./*
do
	if [ "$i" -ef "$1" ]
	then
		cp "$i" "$NGINXROOT"
	fi
done
