from django.shortcuts import render
from app.models import Auth, Profile
from app.serializer import AuthSerializer, ProfileSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.
class AuthView(APIView):
    def get(self, request, format=None):
        auths = Auth.objects.all()
        serializer = AuthSerializer(auths, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = AuthSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class ProfileView(APIView):
    def get(self, request, format=None):
        profiles = Profile.objects.all()
        serializer = ProfileSerializer(profiles, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
