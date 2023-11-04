from rest_framework import serializers
from app.models import Auth, Profile


class AuthSerializer(serializers.ModelSerializer):
    class Meta:
        model = Auth
        fields = ['email', 'password']


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['username', 'biography', 'status', 'auth']
