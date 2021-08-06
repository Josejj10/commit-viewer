import graphene
import back.schema


class Query(back.schema.Query, graphene.ObjectType):
    pass


class Mutations(back.schema.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutations)
