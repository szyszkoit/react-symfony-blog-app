<?php

namespace AppBundle\Controller;

use AppBundle\Entity\BlogUser;
use AppBundle\Entity\BlogPosts;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\HttpFoundation\Session\Session;


class commentsController extends Controller
{

    /**
     * @Route("/addcomment", name="addComment")
     */
    public function addCommentAction(Request $request)
    {
        $req = $request->request->all();
        return new Response(json_encode($req, true), 200);
    }
}