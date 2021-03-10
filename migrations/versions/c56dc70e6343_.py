"""empty message

Revision ID: c56dc70e6343
Revises: ea5eed9d8b2c
Create Date: 2021-03-10 22:03:32.975851

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c56dc70e6343'
down_revision = 'ea5eed9d8b2c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('dogs',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('dog_type', sa.String(length=120), nullable=False),
    sa.Column('fundation_worker', sa.String(length=120), nullable=False),
    sa.Column('descripcition', sa.String(length=2000), nullable=False),
    sa.Column('age', sa.Integer(), nullable=False),
    sa.Column('size', sa.Integer(), nullable=False),
    sa.Column('temperament', sa.String(length=2000), nullable=False),
    sa.Column('vaccines', sa.Boolean(), nullable=False),
    sa.Column('gender', sa.String(length=80), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('pets')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('pets',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('pet_type', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('fundation_worker', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('descripcition', sa.VARCHAR(length=2000), autoincrement=False, nullable=False),
    sa.Column('age', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('size', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('temperament', sa.VARCHAR(length=2000), autoincrement=False, nullable=False),
    sa.Column('vaccines', sa.BOOLEAN(), autoincrement=False, nullable=False),
    sa.Column('gender', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], name='pets_user_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='pets_pkey')
    )
    op.drop_table('dogs')
    # ### end Alembic commands ###