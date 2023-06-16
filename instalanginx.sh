NGINXROOT="/usr/share/nginx/mirasahi/"
if [ "$EUID" != "0" ]
then
	echo "Necesitas permisos de administrador para instalar"
	exit 1
fi

if ! [ "$NGINXROOT" -ef "/" ]
then
	rm -rf "$NGINXROOT"/*
fi

for i in ./*
do
	if ! [ "$i" -ef "$0" ]
	then
		cp -r "$i" "$NGINXROOT"
	fi
done
