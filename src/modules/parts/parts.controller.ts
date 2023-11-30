import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, Query, HttpStatus } from '@nestjs/common';
import { PartsService } from './parts.service';
import { CreatePartDto } from './dto/create-part.dto';
import { UpdatePartDto } from './dto/update-part.dto';
import { Public } from 'src/common/decorators';
import { ApiTags } from '@nestjs/swagger';
import { QueryDTO, QueryIdDto } from 'src/common/_query/query.dto';
import { UpdateOrdersDto } from 'src/common/_query/order.dto';

@ApiTags('parts')
@Controller('part')
export class PartsController {
  constructor(private readonly partsService: PartsService) {}

  
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

  @HttpCode(HttpStatus.OK)
  @Public()
  @Get('pagination')
  findAllPagination(@Query() query: QueryDTO) {
    return this.partsService.findAllPagination(query);
  }

  @Public()
  @HttpCode(200)
  @Get('withcourse')
  findAllWithCourse(@Query() query: QueryIdDto ) {
    return this.partsService.findAllWithCourse(query);
  }

  @Public()
  @HttpCode(200)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partsService.findOne(id);
  }

    
  @HttpCode(200)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartDto: UpdatePartDto) {
    return this.partsService.update(id, updatePartDto);
  }

  @HttpCode(200)
  @Patch('/update/orders')
  updatePartOrders(@Body() updatePartDto: UpdateOrdersDto) {
    return this.partsService.updatePartOrders(updatePartDto);
  }

  
  @HttpCode(200)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partsService.remove(id);
  }
}
