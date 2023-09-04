import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode } from '@nestjs/common';
import { PartsService } from './parts.service';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards';
import { Public } from 'src/common/decorators';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('parts')
@Controller('part')
export class PartsController {
  constructor(private readonly partsService: PartsService) {}

  @Roles('Admin')
  @UseGuards(RolesGuard)
  @HttpCode(201)
  @Post()
  create(@Body() createPartDto: CreatePartDto) {
    return this.partsService.create(createPartDto);
  }

  @Public()
  @HttpCode(200)
  @Get()
  findAll() {
    return this.partsService.findAll();
  }

  @Public()
  @HttpCode(200)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partsService.findOne(+id);
  }

  @Roles('Admin')
  @UseGuards(RolesGuard)  
  @HttpCode(200)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartDto: UpdatePartDto) {
    return this.partsService.update(+id, updatePartDto);
  }

  @Roles('Admin')
  @UseGuards(RolesGuard)
  @HttpCode(200)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partsService.remove(+id);
  }
}
